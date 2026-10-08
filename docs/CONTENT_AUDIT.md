# Content audit: what is verified and what is not

Every item on the site carries a label: Verified (public page or code), Certificate (image of a certificate),
My screenshot (a capture you supplied), Self-reported. This file records the decisions behind the numbers.

## Numbers that differ from your profile image and README
| Claim in image or README | What the evidence supports | On the site |
|---|---|---|
| 1500+ DSA problems | LeetCode 500+ (public), TakeUForward 348 (public; syncs with LeetCode, so they overlap). GFG shows no public count | "500+ LeetCode", "348 TUF". "1000+ across platforms" appears only as self-reported |
| 175+ repositories | 154 repositories enumerated on 2026-10-04 (GitHub header said 146) | "150+" with a live count from the GitHub API |
| 60+ projects | About 74 application-level projects (48 app repos, about 22 console systems and games, about 6 ML notebooks) | "60+" with the breakdown |
| Rank 1 in 11th and 12th | On resume and profile; no certificate image | Shown under Education as stated on the resume |
| 7.5% Government Scholarship quota | Profile only | Shown, labelled as profile |
| CGPA 8.5 | Resume lists 8.32 (earlier) | 8.5 shown, with the note |
| Tech-stack image | 60+ tools found in code; the rest are not in any public repository | All tools shown; unmatched ones are dashed "listed only" |

## Things that could not be done honestly
- **LinkedIn top 50 posts:** LinkedIn exposes no public post data and blocks automated access. The LinkedIn page reads posts from `DATA.linkedin.posts` in `js/data-core.js`; add up to 50 as `{title, url, date, tag}` and they appear automatically. Until then it shows what you post about.
- **YouTube top 30 videos:** 14 demo videos are documented with real links on your previous portfolio. The channel has 96 videos at the time of your screenshot, but YouTube blocks automated reading of titles and view counts. Add more to `DATA.videos` as `[videoId, title, description]`.
- **EchoCare paper and a second paper:** only one paper is documented: "Smart Emergency Healthcare System" (IJRAR, April 2025). Your "conference" and "journal" images are the same paper. There is no published Echo-care paper, so Echo-care appears as a software project. The 2024 "Modern Application Development Approaches" paper has no supporting document and is not shown.
- **Theme:** I could not read takeUforward's stylesheet, so colours are approximations. Edit the variables at the top of `css/style.css`.

## Corrections to earlier work
- LinkedIn URL is `linkedin.com/in/dhineshkumar-m-b75b1a283` (from your own screenshot), not `dhinesh-developer`.
- TakeUForward URL is `takeuforward.org/profile/dhinesh_developer_07`.
- Association name is "Sciental", as on your LinkedIn headline and certificate.
- The earlier Streamlit version said 4 pull requests and 4 issues; the correct count is 5 pull requests and 3 issues.
- AWS (Quaziro, Nov to Dec 2023) and Prodigy, InternPe, NoviTech, NullClass are now verified by certificate.

## Repository fixes worth making
See docs/GITHUB_TOP20.md in the earlier Streamlit package, in particular: committed `.venv` in SDET-Learning, unmeasured claims in the predictive-maintenance README, salary text in the ride-booking README, and few commits on flagship repositories.

## Update: blue theme, banner and new copy
- **Theme:** the relaunched takeUforward identity replaced the old orange and red theme, so the site moved to a blue palette with glass-style cards. Exact TUF colours and fonts could not be read from their site; the palette and Inter/JetBrains Mono are approximations. Tune the tokens at the top of `css/style.css`.
- **Banner:** your original `linkedin_banner_pro.png` states "1500+ Solved", "60+ Projects" and "175+ Repositories" and an outdated LinkedIn address. The site uses a rebuilt version of the same layout with checked numbers (500+ LeetCode, 348 TUF, 60+ projects, 150+ repositories) and the correct LinkedIn path. The original is not used.
- **Your text:** the Home and About copy is yours, edited for structure only. Two statements have no public repository evidence yet: REST Assured (listed as "listed only" on Skills) and Linux/Jira/Agile practice. Both read as learning, which is how the text frames them.
- **Added:** architecture flow diagrams for the featured projects and the LogicVeda pipeline (derived from the code), a learning roadmap, an engineering-loop graphic, a now/next/later board, and a link-preview image.

## Update: projects, growth and open source
- **Projects:** 46 project cards and 19 console programs. Stack lists come from dependency files, not from older portfolios. Corrections made from the code: Agro-Connect and online-gym-final contain front ends only (HTML, CSS, JavaScript), so the Java EE and Spring Boot stacks listed on the old portfolio are not repeated; Scanerio_Based_Projects holds 19 programs (16 systems, 3 games), not 22; MobilePrepaidRechargeApplication has Spring Security, JWT, OTP and Razorpay code but no root build file committed.
- **Growth charts:** computed from the full git history of all 154 repositories, counting only commits made with your email: 1,423 commits, 637 active days, June 2024 to October 2026. Technology adoption dates are the first commit of the repository that uses each technology.
- **Open source:** the README text for Nexus Spring of Code, GirlScript Summer of Code and Social Summer of Code is used as written. Only Nexus Spring of Code has public pull requests (5 pull requests and 3 issues, none merged). The other two are labelled self-reported.
- **LinkedIn posts:** not readable by any website. Use tools/import_linkedin.py with your LinkedIn data export.
- **YouTube top 30:** 14 demos are documented with links; the channel's other titles cannot be read automatically.
