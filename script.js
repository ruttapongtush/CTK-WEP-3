const menuButton=document.querySelector('.menu-btn');const nav=document.querySelector('.nav');
if(menuButton&&nav){menuButton.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

const albums={
 networksystem:{title:'NETWORK SYSTEM',images:Array.from({length:9},(_,i)=>`images/networksystem/network${i+1}.jpg`)},
 cctvsystem:{title:'CCTV SYSTEM',images:Array.from({length:10},(_,i)=>`images/cctvsystem/cctv${i+1}.jpg`)},
 smartparking:{title:'SMART PARKING',images:Array.from({length:8},(_,i)=>`images/smartparking/smartparking${i+1}.jpg`)},
 wifihotspotsystem:{title:'WIFI HOTSPOT SYSTEM',images:Array.from({length:8},(_,i)=>`images/wifihotspotsystem/wifihotspot${i+1}.jpg`)},
 cleaningservice:{title:'CLEANING SERVICE',images:Array.from({length:3},(_,i)=>`images/cleaningservice/cleaning${i+1}.jpg`)},
 gardening:{title:'GARDENING SERVICE',images:Array.from({length:9},(_,i)=>`images/gardening/gardening${i+1}.jpg`)}
};
let currentAlbumImages=[],currentImageIndex=0;
function openAlbum(key){const album=albums[key],viewer=document.getElementById('viewer'),wrap=document.getElementById('albumImages'),title=document.getElementById('viewerTitle');if(!album||!viewer)return;title.textContent=album.title;wrap.innerHTML='';album.images.forEach((src,index)=>{const img=document.createElement('img');img.src=src;img.alt=`${album.title} ${index+1}`;img.loading='lazy';img.onclick=()=>openLightbox(album.images,index);wrap.appendChild(img)});viewer.classList.add('active');viewer.scrollIntoView({behavior:'smooth',block:'start'})}
function closeAlbum(){document.getElementById('viewer')?.classList.remove('active')}
function openLightbox(images,index){currentAlbumImages=images;currentImageIndex=index;const box=document.getElementById('lightbox');const img=document.getElementById('lightboxImg');if(!box||!img)return;img.src=images[index];box.classList.add('active');document.body.style.overflow='hidden'}
function closeLightbox(){document.getElementById('lightbox')?.classList.remove('active');document.body.style.overflow=''}
function showImage(index){if(!currentAlbumImages.length)return;currentImageIndex=(index+currentAlbumImages.length)%currentAlbumImages.length;document.getElementById('lightboxImg').src=currentAlbumImages[currentImageIndex]}
function prevImage(e){e?.stopPropagation();showImage(currentImageIndex-1)}function nextImage(e){e?.stopPropagation();showImage(currentImageIndex+1)}
document.addEventListener('keydown',e=>{const box=document.getElementById('lightbox');if(!box?.classList.contains('active'))return;if(e.key==='ArrowLeft')prevImage();if(e.key==='ArrowRight')nextImage();if(e.key==='Escape')closeLightbox()});
