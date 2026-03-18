const whatsappNumber = "628123456789";

const data = {
  as1: [
    {
      name:"Gramercy 5x12",
      images:["images/rumah1.jpg","images/rumah2.jpg"],
      kt:5,
      km:4,
      lt:"166m²",
      lb:"155m²",
      price:"2.5M",
      cicilan:"16jt",
      promo:"Diskon 35jt",
      fasilitas:["Free AC","Smart Door Lock","CCTV","Solar Panel"]
    },
     {
      name:"Gramercy 5x12",
      images:["images/rumah1.jpg","images/rumah2.jpg"],
      kt:5,
      km:4,
      lt:"166m²",
      lb:"155m²",
      price:"2.5M",
      cicilan:"16jt",
      promo:"Diskon 35jt",
      fasilitas:["Free AC","Smart Door Lock","CCTV","Solar Panel"]
    },
     {
      name:"Gramercy 5x12",
      images:["images/rumah1.jpg","images/rumah2.jpg"],
      kt:5,
      km:4,
      lt:"166m²",
      lb:"155m²",
      price:"2.5M",
      cicilan:"16jt",
      promo:"Diskon 35jt",
      fasilitas:["Free AC","Smart Door Lock","CCTV","Solar Panel"]
    }
  ],
  as2: [
    {
      name:"Vola 6x12",
      images:["images/rumah1.jpg","images/rumah2.jpg"],
      kt:4,
      km:3,
      lt:"150m²",
      lb:"140m²",
      price:"3M",
      cicilan:"18jt",
      promo:"HOT DEAL",
      fasilitas:["Free AC","Smart Lock","CCTV"]
    },
        {
      name:"Vola 6x12",
      images:["images/rumah1.jpg","images/rumah2.jpg"],
      kt:4,
      km:3,
      lt:"150m²",
      lb:"140m²",
      price:"3M",
      cicilan:"18jt",
      promo:"HOT DEAL",
      fasilitas:["Free AC","Smart Lock","CCTV"]
    },
        {
      name:"Vola 6x12",
      images:["images/rumah1.jpg","images/rumah2.jpg"],
      kt:4,
      km:3,
      lt:"150m²",
      lb:"140m²",
      price:"3M",
      cicilan:"18jt",
      promo:"HOT DEAL",
      fasilitas:["Free AC","Smart Lock","CCTV"]
    }
  ]
};

function showCluster(cluster){
  const container = document.getElementById("cards");
  container.innerHTML = "";

  data[cluster].forEach(item => {
    const waLink = `https://wa.me/${whatsappNumber}?text=Saya tertarik dengan ${item.name}`;

    container.innerHTML += `
    <div class="card">
      <div class="badge">${item.promo}</div>

      <img src="${item.images[0]}">

      <div class="card-content">
        <h3>${item.name}</h3>

        <div class="highlight">
          <span>🛏 ${item.kt} KT</span>
          <span>🚿 ${item.km} KM</span>
          <span>📐 LT ${item.lt}</span>
          <span>🏠 LB ${item.lb}</span>
        </div>

        <div class="price-box">
          <div>Cicilan<br><b>${item.cicilan}</b></div>
          <div>Harga<br><b>${item.price}</b></div>
          <div>KPR<br><b>Instant</b></div>
        </div>

        <div class="facilities">
          ${item.fasilitas.map(f => `<p>✔ ${f}</p>`).join("")}
        </div>

        <a class="btn" href="${waLink}" target="_blank">
          <i class="fab fa-whatsapp"></i> WhatsApp
        </a>
      </div>
    </div>
    `;
  });
}