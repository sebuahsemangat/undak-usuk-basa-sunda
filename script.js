// Menambahkan event listener pada input untuk menangani tombol Enter
document
.getElementById("slugInput")
.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    getData(); // Panggil fungsi pencarian data ketika Enter ditekan
  }
});
async function getData() {
const slug = document.getElementById("slugInput").value;
const url = `https://hibersunda.onrender.com/undakusukbasa/${slug}`;

try {
  const response = await fetch(url);
  const data = await response.json();

  if (data.length > 0) {
    displayData(data[0]);
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `<p class="text-danger">Data tidak ditemukan.</p>`;
  }
} catch (error) {
  console.error("Error fetching data:", error);
  document.getElementById(
    "result"
  ).innerHTML = `<p class="text-danger">Terjadi kesalahan saat mengambil data.</p>`;
}
}

function displayData(data) {
const resultDiv = document.getElementById("result");
resultDiv.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Hasil Pencarian</h5>
                <p class="card-text"><strong>Sorangan:</strong> ${data.sorangan}</p>
                <p class="card-text"><strong>Batur:</strong> ${data.batur}</p>
                <p class="card-text"><strong>Loma:</strong> ${data.loma}</p>
                <p class="card-text"><strong>Bahasa Indonesia:</strong> ${data.bindo}</p>
                <p class="card-text"><strong>Bahasa Inggris:</strong> ${data.english}</p>
            </div>
        </div>
    `;
}