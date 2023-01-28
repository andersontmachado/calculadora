function calculateTip(event) {
    event.preventDefault();
    let bill = document.getElementById("bill").value;
    let servicesQualid = document.getElementById("quali").value;
    let quantipeople = document.getElementById("people").value;

    if(bill == " " | servicesQualid == 0){
        //se a conta estiver vazia ou estiver zerada,crie esse alerta
        alert("Por favor,preencha os valores")
        return;
    }
    if(quantipeople == 0 | quantipeople <=1){
        quantipeople=1;
        document.getElementById("each").style.display="none";
}
else{
    document.getElementById("each").style.display="block";
    //block faz aparecer

}
let total= (bill * servicesQualid) /quantipeople;//são as variáveis let,não do index.html
total=total.toFixed(2);
document.getElementById("Tip").innerHTML = total;
document.getElementById("totaltip").style.display="block";



}

document.getElementById("totaltip").style.display="none";
document.getElementById("each").style.display="none";
//  desaparece todo o contéudo da totaltip e each

document.getElementById("formtips").addEventListener("submit",calculateTip);