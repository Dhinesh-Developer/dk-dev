"""Regenerates assets/img/banner-dk.png (LinkedIn-size banner), og-image.png and favicon.png.
Edit the values in ACH, PROFILE and SKILLS, then run:  python tools/make_images.py   (needs Pillow)"""
import glob, os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

HERE = os.path.dirname(os.path.abspath(__file__)); IMG = os.path.join(HERE, "..", "assets", "img")
def font(names, size):
    for n in names:
        for p in glob.glob(f"/usr/share/fonts/truetype/**/{n}", recursive=True) + glob.glob(f"C:/Windows/Fonts/{n}"):
            try: return ImageFont.truetype(p, size)
            except OSError: pass
    return ImageFont.load_default()
fb = lambda s: font(["DejaVuSans-Bold.ttf", "arialbd.ttf"], s)
fm = lambda s: font(["DejaVuSansMono.ttf", "consola.ttf"], s)
fr = lambda s: font(["DejaVuSans.ttf", "arial.ttf"], s)
BLUE, CY, TXT, MUT, STR = (76,125,255), (34,211,238), (238,242,251), (154,167,194), (251,191,36)

ACH = [("leetcode", "500+ solved"), ("takeuforward", "348 solved"), ("projects", "60+ built"), ("repos", "150+ public"), ("honors", "Hall of Fame Award, Merit Scholarship")]
PROFILE = [("linkedin", "in/dhineshkumar-m-b75b1a283"), ("github", "Dhinesh-Developer"), ("leetcode", "dhineshdeveloper_07")]
SKILLS = [("role", "Software Development Engineer"), ("stack", "Full Stack Java Developer"), ("testing", "SDET: Selenium, Playwright, pytest"), ("ai", "Applied AI and GenAI, RAG"), ("agentic", "AI agents, LangGraph, MCP"), ("core", "DSA, OOP, SQL, NoSQL"), ("design", "System Design (HLD and LLD)")]

def bg(W, H):
    im = Image.new("RGB", (W, H), (7, 11, 20)); g = Image.new("RGB", (W, H), (0, 0, 0)); gd = ImageDraw.Draw(g)
    gd.ellipse((-200, -200, W*.45, H*1.6), fill=(30, 60, 160)); gd.ellipse((W*.6, -300, W*1.2, H*1.2), fill=(14, 90, 130))
    im = Image.blend(im, g.filter(ImageFilter.GaussianBlur(160)), .35); d = ImageDraw.Draw(im)
    for x in range(0, W, 32):
        for y in range(0, H, 32): d.point((x, y), fill=(40, 52, 84))
    return im

def window(im, box, title, pairs, size=14, step=19):
    d = ImageDraw.Draw(im, "RGBA"); x0, y0, x1, y1 = box
    d.rounded_rectangle(box, 12, fill=(13, 20, 36, 235), outline=(34, 48, 82), width=2)
    for i, c in enumerate([(255,95,86), (255,189,46), (39,201,63)]): d.ellipse((x0+16+i*20, y0+13, x0+26+i*20, y0+23), fill=c)
    t = fm(14); d.text(((x0+x1)/2 - d.textlength(title, font=t)/2, y0+10), title, font=t, fill=MUT)
    d.line((x0, y0+34, x1, y0+34), fill=(34, 48, 82)); f = fm(size); y = y0 + 42
    rows = [[("{", TXT)]] + [[("  ", TXT), (f'"{k}"', CY), (": ", TXT), (f'"{v}"', STR), ("," if i < len(pairs)-1 else "", TXT)] for i, (k, v) in enumerate(pairs)] + [[("}", TXT)]]
    for ln in rows:
        x = x0 + 16
        for txt, col in ln: d.text((x, y), txt, font=f, fill=col); x += d.textlength(txt, font=f)
        y += step

def circle_photo(im, cx, cy, r, ring=4):
    d = ImageDraw.Draw(im); ph = Image.open(os.path.join(IMG, "profile.jpg")).convert("RGB").resize((2*r-24, 2*r-24))
    m = Image.new("L", ph.size, 0); ImageDraw.Draw(m).ellipse((0, 0, ph.size[0]-1, ph.size[1]-1), fill=255)
    d.ellipse((cx-r, cy-r, cx+r, cy+r), outline=BLUE, width=ring); d.ellipse((cx-r-10, cy-r-10, cx+r+10, cy+r+10), outline=(40, 70, 150), width=2)
    im.paste(ph, (cx-r+12, cy-r+12), m)

def banner():
    W, H = 1584, 396; im = bg(W, H); d = ImageDraw.Draw(im); cx, cy = 190, 150
    circle_photo(im, cx, cy, 110); d.ellipse((cx+66, cy+60, cx+92, cy+86), fill=(34,197,94), outline=(7,11,20), width=4)
    for txt, f, y, col in [("DK dev </>", fb(34), 282, TXT), ("Dhineshkumar M", fb(26), 334, TXT), ("Building scalable, intelligent systems", fr(15), 368, MUT)]:
        d.text((cx - d.textlength(txt, font=f)/2, y), txt, font=f, fill=col)
    d.line((cx-70, 326, cx+70, 326), fill=CY, width=3); d.line((372, 40, 372, 356), fill=(34, 48, 82), width=2)
    window(im, (396, 28, 880, 214), "achievements.json", ACH); window(im, (396, 226, 880, 368), "profile.json", PROFILE)
    window(im, (900, 28, 1556, 368), "skills.json", SKILLS, size=15, step=21)
    im.save(os.path.join(IMG, "banner-dk.png"), optimize=True)

def og():
    W, H = 1200, 630; im = bg(W, H); d = ImageDraw.Draw(im); circle_photo(im, 990, 280, 170, 5)
    d.text((70, 120), "Dhineshkumar M", font=fb(62), fill=TXT)
    for i, (t, c) in enumerate([("Building Software.", BLUE), ("Solving Problems.", CY), ("Learning by Engineering.", TXT)]): d.text((70, 205+i*50), t, font=fb(40), fill=c)
    d.text((70, 400), "Java backend  |  Test automation  |  Applied AI", font=fr(26), fill=MUT)
    for i, (a, b) in enumerate([("500+", "LeetCode"), ("348", "TUF"), ("60+", "Projects")]):
        x = 70 + i*190; d.rounded_rectangle((x, 470, x+170, 560), 12, fill=(13, 20, 36), outline=(34, 48, 82), width=2)
        d.text((x+16, 480), a, font=fb(34), fill=TXT); d.text((x+16, 525), b, font=fr(18), fill=MUT)
    im.save(os.path.join(IMG, "og-image.png"), optimize=True)

def favicon():
    f = Image.new("RGB", (64, 64), BLUE); d = ImageDraw.Draw(f); ft = fb(30)
    d.text(((64 - d.textlength("DK", font=ft))/2, 15), "DK", font=ft, fill="white"); f.save(os.path.join(IMG, "favicon.png"))

if __name__ == "__main__": banner(); og(); favicon(); print("done")
