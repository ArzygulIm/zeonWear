import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, doc, setDoc, collection, getDocs, getDoc, getDocFromCache } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyBOC9RuMcJL3fMmQ-2-XPdcCOXs7TSulKI",
    authDomain: "zeon-1bfb4.firebaseapp.com",
    projectId: "zeon-1bfb4",
    storageBucket: "zeon-1bfb4.appspot.com",
    messagingSenderId: "683663662272",
    appId: "1:683663662272:web:889183c1d3824f21b22125",
    databaseURL: "https://DATABASE_NAME.firebaseio.com"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const checkUserCart = async () => {
    if (JSON.parse(localStorage.getItem('userId'))) {
        const docRef = doc(db, "users", JSON.parse(localStorage.getItem('userId')));
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            let cartData = docSnap.data().cart
            if(cartData.length == 0){
               document.querySelector('.dropdown__cart').innerHTML = `
                    <div class="dropdown__cart__buttons__message">В корзинке нет товаров</div>
                    <div class="dropdown__cart__buttons__wrap flex flex-fd-c">
                        <div class="flex flex-jc-sb">
                            <h6></h6>
                            <h6></h6>
                        </div>
                        <a href="../cart/cart.html">Перейти в корзину</a>
                    </div>
                ` 
            }else{

            }
        }        
    }
    else {
        document.querySelector('.dropdown__cart').innerHTML = `
            Чтобы посмотреть корзинку войдите в сайт
        `
    }
}
checkUserCart()

document.getElementById("searchBtn").addEventListener('click', (e) => {
    e.preventDefault()
    if(document.getElementById("searchInput").value != ""){
        sessionStorage.setItem('searchInputValue', document.getElementById("searchInput").value);
    }
    console.log(document.getElementById("searchInput").value)
})