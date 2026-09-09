import sys
import io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

with open('src/App.jsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print(f"Total lines: {len(lines)}")
print(f"Line 734 (0-indexed 733): {repr(lines[733][:80])}")
print(f"Line 735 (0-indexed 734): {repr(lines[734][:80])}")
print(f"Line 736 (0-indexed 735): {repr(lines[735][:80])}")
print(f"Line 737 (0-indexed 736): {repr(lines[736][:80])}")
print(f"Line 748 (0-indexed 747): {repr(lines[747][:80])}")

new_sidebar = (
    '              <div className="sidebar-widget">\n'
    "                <div style={{ textAlign: 'center', marginBottom: '16px' }}>\n"
    '                  <img src="/hero-banner.jpg" alt="\u0641\u0643\u0631\u064a \u062c\u0631\u0648\u0628"'
    " style={{ width: '110px', height: '110px', borderRadius: '50%',"
    " objectFit: 'cover', margin: '0 auto 12px', display: 'block',"
    " border: '3px solid var(--gold-primary)' }} />\n"
    '                  <h4 style={{ fontSize: "1.2rem", fontWeight: "700",'
    ' color: "var(--text-main)", marginBottom: "4px" }}>\u0641\u0643\u0631\u064a \u062c\u0631\u0648\u0628</h4>\n'
    '                  <div style={{ fontSize: "0.85rem", color: "var(--gold-dark)" }}>'
    '\u0631\u0627\u0626\u062f \u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u0645\u0627\u0643\u064a\u0646\u0627\u062a \u0641\u064a \u0627\u0644\u0634\u0631\u0642 \u0627\u0644\u0623\u0648\u0633\u0637</div>\n'
    '                </div>\n'
    "                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)',"
    " lineHeight: '1.7', textAlign: 'center', marginBottom: '16px' }}>\n"
    '                  \u0623\u0643\u062b\u0631 \u0645\u0646 20 \u0639\u0627\u0645\u0627\u064b \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0635\u0646\u0627\u0639\u0627\u062a \u0627\u0644\u0631\u062e\u0627\u0645.\n'
    '                </p>\n'
    '              </div>\n'
    '\n'
    '              <div className="sidebar-widget featured-product-widget">\n'
    "                <span className=\"section-badge\" style={{ marginBottom: '10px',"
    " display: 'inline-block' }}>\u0645\u0627\u0643\u064a\u0646\u0629 \u0627\u0634\u062a\u0647\u0631 \u2b50</span>\n"
    "                <div style={{ borderRadius: '10px', overflow: 'hidden',"
    " height: '160px', marginBottom: '14px' }}>\n"
    '                  <img src="/saw-13.jpg" alt="\u0645\u0627\u0643\u064a\u0646\u0629 \u0646\u0634\u0631 13 \u0623\u0633\u0637\u0648\u0627\u0646\u0629"'
    " style={{ width: '100%', height: '100%', objectFit: 'cover' }} />\n"
    '                </div>\n'
    '                <h4 style={{ fontSize: "1.1rem", fontWeight: "700",'
    ' color: "var(--text-main)", marginBottom: "8px" }}>\u0645\u0627\u0643\u064a\u0646\u0629 \u0646\u0634\u0631 \u0627\u0644\u062c\u0631\u0627\u0646\u064a\u062a 13 \u0623\u0633\u0637\u0648\u0627\u0646\u0629</h4>\n'
    "                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)',"
    " marginBottom: '16px' }}>\u0623\u0639\u0644\u0649 \u0625\u0646\u062a\u0627\u062c\u064a\u0629 \u064a\u0648\u0645\u064a\u0629 \u0644\u0645\u0635\u0646\u0639\u0643 \u0645\u0639 \u0646\u0638\u0627\u0645 \u062d\u0645\u0627\u0645 \u0627\u0644\u0632\u064a\u062a.</p>\n"
    "                <button onClick={() => handleWhatsAppQuote('\u0645\u0627\u0643\u064a\u0646\u0629 \u0646\u0634\u0631 13 \u0623\u0633\u0637\u0648\u0627\u0646\u0629')}"
    " className=\"btn btn-gold\""
    " style={{ width: '100%', padding: '10px', fontSize: '0.9rem' }}>\n"
    '                  \u0637\u0644\u0628 \u062a\u0641\u0627\u0635\u064a\u0644 \u0648\u0633\u0639\u0631\n'
    '                </button>\n'
    '              </div>\n'
)

# Lines 731-747 (0-indexed) are the broken block
new_lines = lines[:731] + [new_sidebar] + lines[748:]

with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print(f"DONE! New total lines: {len(new_lines)}")
