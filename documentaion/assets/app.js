let products=[]; let selectedCategory="All";

async function loadProducts(){
  const res=await fetch("data/products.json");
  products=await res.json();
  renderCategories();
  renderProducts();
}
function renderCategories(){
  const categories=["All",...new Set(products.map(p=>p.category))];
  document.getElementById("categoryTabs").innerHTML=categories.map(c=>`<button class="${c===selectedCategory?"active":""}" data-category="${c}">${c}</button>`).join("");
  document.querySelectorAll("#categoryTabs button").forEach(b=>b.addEventListener("click",()=>{selectedCategory=b.dataset.category;renderCategories();renderProducts()}));
}
function renderProducts(){
  const list=selectedCategory==="All"?products:products.filter(p=>p.category===selectedCategory);
  document.getElementById("productGrid").innerHTML=list.map(p=>`
    <div class="col-md-6 col-lg-4">
      <article class="product-card">
        <img class="product-img" src="${p.image}" alt="${p.name}">
        <div class="product-body">
          <p class="eyebrow">${p.category}</p><h3>${p.name}</h3><p>${p.shortDescription}</p>
          <div class="product-meta"><span class="product-price">${p.currency} ${p.price.toLocaleString()}</span><button class="view-btn" onclick="showProduct(${p.id})">View details →</button></div>
        </div>
      </article>
    </div>`).join("");
}
function showProduct(id){
  const p=products.find(x=>x.id===id); if(!p)return;
  document.getElementById("modalImage").src=p.image;
  document.getElementById("modalImage").alt=p.name;
  document.getElementById("modalCategory").textContent=p.category;
  document.getElementById("modalName").textContent=p.name;
  document.getElementById("modalDescription").textContent=p.description;
  document.getElementById("modalPrice").textContent=`${p.currency} ${p.price.toLocaleString()}`;
  document.getElementById("modalSpecs").innerHTML=Object.entries(p.specs).map(([k,v])=>`<div class="spec-row"><span>${k}</span><b>${v}</b></div>`).join("");
  new bootstrap.Modal("#productModal").show();
}
function updateVisitors(){
  const key="albertoClockVisitors";
  const count=Number(localStorage.getItem(key)||0)+1;
  localStorage.setItem(key,count);
  document.getElementById("visitorCount").textContent=count.toLocaleString();
}
function updateTicker(){
  const now=new Date();
  const date=now.toLocaleDateString(undefined,{weekday:"long",year:"numeric",month:"long",day:"numeric"});
  const time=now.toLocaleTimeString();
  document.getElementById("tickerText").textContent=`  ${date} · ${time} · Location: requesting browser permission…  `;
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(pos=>{
      const {latitude,longitude}=pos.coords;
      document.getElementById("tickerText").textContent=`  ${date} · ${time} · Location: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}  `;
    },()=>document.getElementById("tickerText").textContent=`  ${date} · ${time} · Location: permission not granted  `);
  }
}
document.addEventListener("DOMContentLoaded",()=>{
  loadProducts().catch(()=>document.getElementById("productGrid").innerHTML="<p>Product data could not be loaded. Please run the project through a local web server.</p>");
  updateVisitors(); updateTicker(); setInterval(updateTicker,1000);
  document.getElementById("contactForm").addEventListener("submit",e=>{e.preventDefault();alert("Thank you. Your message has been recorded for this demo.");e.target.reset();});
  document.querySelectorAll(".nav-link").forEach(link=>link.addEventListener("click",()=>document.querySelector(".navbar-collapse")?.classList.remove("show")));
});
