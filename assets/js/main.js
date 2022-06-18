let mws = document.getElementById("mwsbetrag");
let bruttoBetrag = document.getElementById("bruttoBetrag");
let endpreisLabel = document.getElementById("endpreis"); 

    
function ergebnis(event) {
    event.preventDefault();

    let netToBrut = document.getElementById("nettoBrutto").checked;
    let brutToNet = document.getElementById("bruttoNetto").checked;
    let taxRate19 = document.getElementById("steuer19").checked;
    let taxRate7 = document.getElementById("steuer7").checked;
    let netAmount = document.getElementById("income").value;

    if (netToBrut == true && taxRate19 == true ) {
        let aNet = netAmount * 1.19;
        bruttoBetrag.innerText = aNet.toFixed(2) + "€" ;
        document.getElementById("nettoBruttoInput").innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer)in €<span>*</span>";
        document.getElementById("endpreis").innerText = "Bruttobetrag (Endpreis)";

        let msw = aNet - netAmount;
        document.getElementById("mwsbetrag").innerText = msw.toFixed(2) + "€";


}   else if (netToBrut == true && taxRate7 == true) {
        let bNet = netAmount * 1.07;
        bruttoBetrag.innerText = bNet.toFixed(2) + "€" ;
        document.getElementById("nettoBruttoInput").innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer)in €<span>*</span>";
        document.getElementById("endpreis").innerText = "Bruttobetrag (Endpreis)";

        let msw = bNet - netAmount;
        document.getElementById("mwsbetrag").innerText = msw.toFixed(2) + "€";
        

}   else if (brutToNet == true &&  taxRate19 == true ) {
        let aBrut = netAmount / 1.19;
        bruttoBetrag.innerText = aBrut.toFixed(2) + "€" ;
        document.getElementById("nettoBruttoInput").innerHTML = "Bruttobetrag (Preis ohne Mehrwertsteuer)in €<span>*</span>";
        document.getElementById("endpreis").innerText = "Nettobetrag (Endpreis)";

        let msw = netAmount - aBrut;
        document.getElementById("mwsbetrag").innerText = msw.toFixed(2) + "€";

}   else if (brutToNet == true &&  taxRate7 == true ) {
        let bBrut = netAmount / 1.07;
        bruttoBetrag.innerText = bBrut.toFixed(2) + "€" ;
        document.getElementById("nettoBruttoInput").innerHTML = "Bruttobetrag (Preis ohne Mehrwertsteuer)in €<span>*</span>";
        document.getElementById("endpreis").innerText = "Nettobetrag (Endpreis)";

        let msw = netAmount - bBrut;
        document.getElementById("mwsbetrag").innerText = msw.toFixed(2) + "€";
}   else {
        document.getElementById("nettoBruttoInput").innerHTML = "Bitte wählen Sie eine Umrechnung und einen Steuersatz aus<span>!</span>";
}
}

