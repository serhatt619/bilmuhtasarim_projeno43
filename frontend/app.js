const products = {
  "8690000000001": { name: "Örnek Süt 1 L", category: "Süt ve süt ürünleri", price: "34,90 TL", stock: "Stokta", initials: "SÜT" },
  "8690000000002": { name: "Örnek Makarna 500 g", category: "Kuru gıda", price: "22,50 TL", stock: "Stokta", initials: "MAK" }
};

const form = document.querySelector("#lookup-form");
const barcodeInput = document.querySelector("#barcode");
const statusBadge = document.querySelector("#result-status");
const emptyState = document.querySelector("#empty-state");
const productResult = document.querySelector("#product-result");
const notFound = document.querySelector("#not-found");
const historyList = document.querySelector("#history-list");
const history = [];

function setStatus(text, type = "") {
  statusBadge.textContent = text;
  statusBadge.className = `result-badge ${type}`.trim();
}

function searchProduct(rawCode) {
  const code = rawCode.trim();
  if (!code) {
    barcodeInput.focus();
    return;
  }

  const product = products[code];
  emptyState.classList.add("hidden");
  productResult.classList.add("hidden");
  notFound.classList.add("hidden");

  if (product) {
    document.querySelector("#product-name").textContent = product.name;
    document.querySelector("#product-category").textContent = product.category;
    document.querySelector("#product-barcode").textContent = code;
    document.querySelector("#product-price").textContent = product.price;
    document.querySelector("#product-stock").textContent = product.stock;
    document.querySelector("#product-initials").textContent = product.initials;
    productResult.classList.remove("hidden");
    setStatus("Ürün bulundu", "success");
    addHistory({ code, name: product.name, price: product.price, found: true });
  } else {
    notFound.classList.remove("hidden");
    setStatus("Bulunamadı", "error");
    addHistory({ code, name: "Ürün bulunamadı", price: "—", found: false });
  }
}

function addHistory(item) {
  history.unshift({ ...item, time: new Date().toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" }) });
  renderHistory();
}

function renderHistory() {
  if (!history.length) {
    historyList.innerHTML = '<div class="history-empty">Henüz sorgu geçmişi yok.</div>';
    return;
  }

  historyList.innerHTML = history.slice(0, 5).map(item => `
    <div class="history-item">
      <div class="history-main">
        <strong>${escapeHtml(item.name)}</strong>
        <span>${escapeHtml(item.code)} · ${item.time}</span>
      </div>
      <div class="history-price">${escapeHtml(item.price)}</div>
      <span class="history-state ${item.found ? "" : "error"}">${item.found ? "Bulundu" : "Bulunamadı"}</span>
    </div>
  `).join("");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

form.addEventListener("submit", event => {
  event.preventDefault();
  searchProduct(barcodeInput.value);
});

document.querySelectorAll(".example-chip").forEach(button => {
  button.addEventListener("click", () => {
    barcodeInput.value = button.dataset.code;
    searchProduct(button.dataset.code);
  });
});

document.querySelector("#clear-history").addEventListener("click", () => {
  history.length = 0;
  renderHistory();
});

renderHistory();
