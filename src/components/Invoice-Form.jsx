import { useState, useRef, useEffect } from "react";

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  :root {
    --gold: #C9A84C;
    --gold-light: #E2C97E;
    --gold-dim: rgba(201,168,76,0.15);
    --bg: #0C0C0F;
    --surface: #13131A;
    --surface2: #1A1A24;
    --border: rgba(201,168,76,0.18);
    --border-hover: rgba(201,168,76,0.45);
    --text: #F0EDE6;
    --muted: #6B6878;
    --placeholder: #3D3B48;
  }

  .inv-wrap * { box-sizing: border-box; margin: 0; padding: 0; }

  .inv-wrap {
    background: var(--bg);
    min-height: 100vh;
    font-family: 'DM Sans', sans-serif;
    color: var(--text);
    padding: 3rem 1.5rem 5rem;
  }

  .inv-inner { max-width: 720px; margin: 0 auto; }

  .inv-header {
    text-align: center;
    margin-bottom: 3.5rem;
  }

  .inv-header::after {
    content: '';
    display: block;
    width: 60px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--gold), transparent);
    margin: 1.5rem auto 0;
  }

  .inv-eyebrow {
    font-size: 10px;
    letter-spacing: .35em;
    text-transform: uppercase;
    color: var(--gold);
    font-weight: 400;
    margin-bottom: .75rem;
  }

  .inv-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.8rem;
    font-weight: 400;
    line-height: 1.1;
    color: var(--text);
    letter-spacing: -.01em;
  }

  .inv-title em {
    font-style: italic;
    color: var(--gold);
  }

  .inv-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 2rem;
    margin-bottom: 1.5rem;
    position: relative;
    overflow: hidden;
    transition: border-color .3s;
  }

  .inv-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--gold-dim), transparent);
  }

  .inv-card:hover { border-color: rgba(201,168,76,0.28); }

  .inv-section-label {
    font-size: 10px;
    letter-spacing: .3em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: .75rem;
  }

  .inv-section-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--border);
  }

  .inv-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .inv-grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }

  @media (max-width: 540px) {
    .inv-grid-2, .inv-grid-3 { grid-template-columns: 1fr; }
    .inv-title { font-size: 2rem; }
  }

  .inv-field { display: flex; flex-direction: column; gap: .45rem; }

  .inv-field label {
    font-size: 11px;
    letter-spacing: .12em;
    text-transform: uppercase;
    color: var(--muted);
    font-weight: 500;
  }

  .inv-field input,
  .inv-field select,
  .inv-field textarea {
    background: var(--surface2);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 8px;
    padding: .8rem 1rem;
    color: var(--text);
    font-family: 'DM Sans', sans-serif;
    font-size: .9rem;
    font-weight: 300;
    outline: none;
    transition: border-color .25s, box-shadow .25s, background .25s;
    width: 100%;
    -webkit-appearance: none;
    appearance: none;
  }

  .inv-field input::placeholder,
  .inv-field textarea::placeholder {
    color: var(--placeholder);
    font-weight: 300;
  }

  .inv-field input:focus,
  .inv-field select:focus,
  .inv-field textarea:focus {
    border-color: var(--border-hover);
    box-shadow: 0 0 0 3px rgba(201,168,76,0.08);
    background: #1E1E2A;
  }

  .inv-field input[type="date"] { color-scheme: dark; }

  .inv-field select {
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23C9A84C' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    padding-right: 2.5rem;
  }

  .inv-field select option { background: #1A1A24; }

  .inv-field textarea { resize: vertical; min-height: 90px; line-height: 1.6; }

  .inv-amount-wrap { position: relative; }

  .inv-currency {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--gold);
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.15rem;
    font-weight: 600;
    pointer-events: none;
    z-index: 1;
  }

  .inv-amount-wrap input { padding-left: 2rem; }

  .inv-drop {
    border: 1px dashed rgba(201,168,76,0.25);
    border-radius: 12px;
    padding: 2rem;
    text-align: center;
    cursor: pointer;
    transition: all .25s;
    background: transparent;
  }

  .inv-drop:hover,
  .inv-drop.dragging {
    border-color: var(--gold);
    background: var(--gold-dim);
  }

  .inv-drop-icon {
    width: 36px;
    height: 36px;
    margin: 0 auto .75rem;
    opacity: .5;
  }

  .inv-drop p {
    font-size: .8rem;
    color: var(--muted);
    line-height: 1.6;
  }

  .inv-drop span { color: var(--gold); }

  .inv-preview {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .inv-preview img {
    width: 64px;
    height: 64px;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid var(--border);
  }

  .inv-preview-info { text-align: left; }
  .inv-preview-info p { font-size: .85rem; color: var(--text); margin-bottom: .2rem; }
  .inv-preview-info span { font-size: .75rem; color: var(--muted); }

  .inv-remove {
    margin-left: auto;
    background: none;
    border: 1px solid rgba(255,80,80,0.3);
    color: rgba(255,80,80,0.7);
    border-radius: 6px;
    padding: .3rem .65rem;
    font-size: .75rem;
    cursor: pointer;
    transition: all .2s;
    font-family: 'DM Sans', sans-serif;
  }

  .inv-remove:hover {
    background: rgba(255,80,80,0.12);
    color: rgba(255,100,100,1);
  }

  .inv-submit {
    width: 100%;
    margin-top: 2rem;
    padding: 1.1rem;
    background: linear-gradient(135deg, #B8902A 0%, #E2C97E 50%, #B8902A 100%);
    background-size: 200% auto;
    border: none;
    border-radius: 10px;
    color: #0C0C0F;
    font-family: 'DM Sans', sans-serif;
    font-size: .9rem;
    font-weight: 500;
    letter-spacing: .1em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-position .4s, transform .15s, box-shadow .3s;
    box-shadow: 0 4px 24px rgba(201,168,76,0.2);
  }

  .inv-submit:hover {
    background-position: right center;
    box-shadow: 0 8px 32px rgba(201,168,76,0.35);
    transform: translateY(-1px);
  }

  .inv-submit:active {
    transform: translateY(0);
    box-shadow: 0 2px 12px rgba(201,168,76,0.2);
  }

  .inv-submit:disabled {
    opacity: .7;
    pointer-events: none;
  }

  .inv-toast {
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%) translateY(120px);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: .9rem 1.75rem;
    display: flex;
    align-items: center;
    gap: .75rem;
    font-size: .875rem;
    color: var(--text);
    transition: transform .4s cubic-bezier(.34,1.56,.64,1);
    z-index: 1000;
    white-space: nowrap;
    box-shadow: 0 20px 60px rgba(0,0,0,.6);
  }

  .inv-toast.show { transform: translateX(-50%) translateY(0); }

  .inv-toast-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--gold);
    flex-shrink: 0;
    animation: inv-pulse 1.5s infinite;
  }

  @keyframes inv-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: .4; }
  }

  .inv-mb { margin-bottom: 1rem; }
`;

function getDefaultInvoiceNumber() {
  return "INV-" + String(Math.floor(Math.random() * 900) + 100).padStart(4, "0");
}

function getToday() {
  return new Date().toISOString().split("T")[0];
}

function getNetThirty() {
  const d = new Date();
  d.setDate(d.getDate() + 30);
  return d.toISOString().split("T")[0];
}

export default function InvoiceForm() {
  const [formData, setFormData] = useState({
    invoiceNumber: getDefaultInvoiceNumber(),
    invoiceDate: getToday(),
    dueDate: getNetThirty(),
    clientName: "",
    clientEmail: "",
    amount: "",
    description: "",
    paymentMethod: "zelle",
    notes: "",
  });

  const [uploadedFile, setUploadedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const fileInputRef = useRef(null);
  const styleRef = useRef(null);

  useEffect(() => {
    if (!document.getElementById("inv-global-styles")) {
      const style = document.createElement("style");
      style.id = "inv-global-styles";
      style.textContent = globalStyles;
      document.head.appendChild(style);
      styleRef.current = style;
    }
    return () => {
      const el = document.getElementById("inv-global-styles");
      if (el) el.remove();
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileSelect = (file) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) return alert("Please upload an image file.");
    const reader = new FileReader();
    reader.onload = (e) =>
      setUploadedFile({ name: file.name, size: file.size, preview: e.target.result });
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e) => { e.preventDefault(); setIsDragging(true); };
  const handleDragLeave = () => setIsDragging(false);
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileSelect(e.dataTransfer.files?.[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((r) => setTimeout(r, 1200));

    console.log("Invoice submitted:", { ...formData, file: uploadedFile });

    setIsSubmitting(false);
    setShowToast(true);

    setFormData({
      invoiceNumber: getDefaultInvoiceNumber(),
      invoiceDate: getToday(),
      dueDate: getNetThirty(),
      clientName: "",
      clientEmail: "",
      amount: "",
      description: "",
      paymentMethod: "zelle",
      notes: "",
    });
    setUploadedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";

    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="inv-wrap">
      <div className="inv-inner">

        {/* Header */}
        <div className="inv-header">
          <p className="inv-eyebrow">Billing Management</p>
          <h1 className="inv-title">New <em>Invoice</em></h1>
        </div>

        <form onSubmit={handleSubmit}>

          {/* Reference Card */}
          <div className="inv-card">
            <div className="inv-section-label">Reference</div>
            <div className="inv-grid-3">
              <div className="inv-field">
                <label>Invoice No.</label>
                <input
                  name="invoiceNumber"
                  value={formData.invoiceNumber}
                  onChange={handleChange}
                  placeholder="INV-0001"
                  required
                />
              </div>
              <div className="inv-field">
                <label>Issue Date</label>
                <input
                  type="date"
                  name="invoiceDate"
                  value={formData.invoiceDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="inv-field">
                <label>Due Date</label>
                <input
                  type="date"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Client Card */}
          <div className="inv-card">
            <div className="inv-section-label">Client Details</div>
            <div className="inv-grid-2">
              <div className="inv-field">
                <label>Client Name</label>
                <input
                  name="clientName"
                  value={formData.clientName}
                  onChange={handleChange}
                  placeholder="Acme Corporation"
                  required
                />
              </div>
              <div className="inv-field">
                <label>Email Address</label>
                <input
                  type="email"
                  name="clientEmail"
                  value={formData.clientEmail}
                  onChange={handleChange}
                  placeholder="hello@acme.com"
                  required
                />
              </div>
            </div>
          </div>

          {/* Billing Card */}
          <div className="inv-card">
            <div className="inv-section-label">Billing</div>
            <div className="inv-grid-2 inv-mb">
              <div className="inv-field">
                <label>Amount</label>
                <div className="inv-amount-wrap">
                  <span className="inv-currency">$</span>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                    required
                  />
                </div>
              </div>
              <div className="inv-field">
                <label>Payment Method</label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                >
                  <option value="zelle">Zelle</option>
                  <option value="bank-transfer">Bank Transfer</option>
                  <option value="credit-card">Credit Card</option>
                  <option value="crypto">Cryptocurrency</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="inv-field">
              <label>Description of Services</label>
              <input
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Web design & development — Q4 2024"
                required
              />
            </div>
          </div>

          {/* Additional Card */}
          <div className="inv-card">
            <div className="inv-section-label">Additional</div>

            <div className="inv-field inv-mb">
              <label>Notes</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Payment terms, bank details, or any special instructions…"
              />
            </div>

            <div className="inv-field">
              <label>Attachment</label>
              <div
                className={`inv-drop${isDragging ? " dragging" : ""}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={(e) => handleFileSelect(e.target.files?.[0])}
                />

                {uploadedFile ? (
                  <div className="inv-preview" onClick={(e) => e.stopPropagation()}>
                    <img src={uploadedFile.preview} alt="preview" />
                    <div className="inv-preview-info">
                      <p>{uploadedFile.name}</p>
                      <span>{(uploadedFile.size / 1024).toFixed(1)} KB</span>
                    </div>
                    <button
                      type="button"
                      className="inv-remove"
                      onClick={(e) => {
                        e.stopPropagation();
                        setUploadedFile(null);
                        if (fileInputRef.current) fileInputRef.current.value = "";
                      }}
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <>
                    <svg className="inv-drop-icon" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="4" y="8" width="28" height="20" rx="3" stroke="#C9A84C" strokeWidth="1.2"/>
                      <path d="M4 22l8-8 5 5 4-4 11 9" stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="24" cy="14" r="2.5" stroke="#C9A84C" strokeWidth="1.2"/>
                    </svg>
                    <p>Drop a screenshot or <span>browse files</span></p>
                    <p style={{ fontSize: ".72rem", marginTop: ".25rem" }}>PNG, JPG, WEBP up to 10MB</p>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="inv-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing…" : "Issue Invoice"}
          </button>
        </form>
      </div>

      {/* Toast */}
      <div className={`inv-toast${showToast ? " show" : ""}`}>
        <div className="inv-toast-dot" />
        Invoice issued successfully
      </div>
    </div>
  );
}