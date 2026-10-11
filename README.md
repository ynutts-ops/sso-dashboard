# SSO Board Election 2026 – Unofficial Count Dashboard
ผลการนับคะแนนเลือกตั้งคณะกรรมการประกันสังคม (อย่างไม่เป็นทางการ)

Static, mobile-friendly dashboard (HTML + Apache ECharts) built from the Thai Social Security Office's public SBE0304 dashboard
(<https://sbe2.sso.go.th/inter/report/dashboard-sbe0304>), API endpoint `/inter/report/dashboard-sbe0304/api/data`.

* Filters: side (employer / insured), region, province (searchable), district (searchable), snapshot time
* KPI cards with change vs previous snapshot, counting trend, candidate top-20, province comparison, region split
* Searchable / sortable tables (candidates, provinces, 928 districts, polling-station highlights) with CSV export
* Thailand province map (leading team or turnout %), team colours + team filter, team vote-share chart
* Thai / English toggle

Data in `data.json` is a point-in-time capture (see "Data as of" in the header). Results are **unofficial**; official results are those announced by the SSO.

Team (slate) assignments are not in the SSO API; they come from a public candidate roster (boonarayapon.com/candidates-2569.txt) matched to the official candidate list and cross-checked with news reports. Province boundaries: apisit/thailand.json (77 provinces), simplified.
