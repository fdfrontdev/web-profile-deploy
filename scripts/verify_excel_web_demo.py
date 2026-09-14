#!/usr/bin/env python3
"""Static checks for the synthetic Excel-to-web evidence page."""
from __future__ import annotations

from html.parser import HTMLParser
from pathlib import Path


class DocumentParser(HTMLParser):
    """Collect basic structural facts without executing page JavaScript."""

    def __init__(self) -> None:
        super().__init__()
        self.ids: set[str] = set()
        self.links: list[str] = []
        self.headings: list[str] = []
        self.script_text: list[str] = []
        self._in_script = False

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attributes = dict(attrs)
        if attributes.get("id"):
            self.ids.add(attributes["id"])
        if tag == "a" and attributes.get("href"):
            self.links.append(attributes["href"])
        if tag == "script":
            self._in_script = True

    def handle_endtag(self, tag: str) -> None:
        if tag == "script":
            self._in_script = False

    def handle_data(self, data: str) -> None:
        clean = " ".join(data.split())
        if not clean:
            return
        if self._in_script:
            self.script_text.append(clean)
        if data.strip() and self.get_starttag_text():
            tag = self.get_starttag_text().split()[0].lstrip("<").lower()
            if tag in {"h1", "h2", "h3"}:
                self.headings.append(clean)


def assert_contains(text: str, phrase: str) -> None:
    if phrase not in text:
        raise AssertionError(f"missing expected phrase: {phrase}")


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    page = root / "case-studies" / "excel-web-workflow-evidence.html"
    source = page.read_text(encoding="utf-8")
    parser = DocumentParser()
    parser.feed(source)

    for element_id in {
        "validateButton",
        "runButton",
        "interruptButton",
        "resumeButton",
        "resetButton",
        "resultTable",
        "progressLog",
    }:
        if element_id not in parser.ids:
            raise AssertionError(f"missing interactive element: {element_id}")

    for phrase in {
        "Synthetic input rows",
        "Validation and run evidence",
        "duplicate row ID",
        "date must use YYYY-MM-DD",
        "INTERRUPTION",
        "RESUME",
        "no customer or production records",
        "does not log into a real website",
    }:
        assert_contains(source, phrase)

    prohibited = {
        "trycloudflare",
        "admin123",
        "ems.globaliot.com.my",
        "EOIOT",
        "password",
        "api_key",
        "access_token",
    }
    lowered = source.lower()
    for phrase in prohibited:
        if phrase.lower() in lowered:
            raise AssertionError(f"prohibited public marker found: {phrase}")

    expected_links = {"../index.html", "workflow-automation-diagnostic.md"}
    if not expected_links.issubset(set(parser.links)):
        raise AssertionError("missing case-study navigation links")

    script = " ".join(parser.script_text)
    for function_name in {"validateRows", "buildRunPlan", "runBatch", "resetDemo"}:
        assert_contains(script, function_name)

    print("PASS: synthetic workflow evidence page structure, claims boundary, controls and script markers verified")


if __name__ == "__main__":
    main()
