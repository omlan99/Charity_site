// getting the history and donation button
let donationBtn = getMyId("donationBtn");
let historyBtn = getMyId("historyBtn");

// adding an eventlisitener to donationBtn
donationBtn.addEventListener('click', function(){
    // bg-neutral-50
    // bg-[#b4f461]

    donationBtn.classList.add('bg-[#b4f461]', 'text-black');
    getMyId('donateCard').classList.remove("hidden");
    historyBtn.classList.remove('bg-[#b4f461]','text-black');
    historyBtn.classList.add('bg-neutral-50', 'text-gray-400');

})

historyBtn.addEventListener('click', function(){
    historyBtn.classList.remove('bg-neutral-50', 'text-gray-400');
    getMyId('donateCard').classList.add("hidden");
    historyBtn.classList.add('bg-[#b4f461]', 'text-black');
    donationBtn.classList.remove('bg-[#b4f461]');
    donationBtn.classList.add('text-gray-400');
})

// getting the donate button
let donate = getMyId("donate");

// adding an evenllisitener to donate button
donate.addEventListener('click', function(){
    let mainBalance = getMyId("mainBalance").innerText;
    let donatedBalance = getMyId("donatedBalance").innerText;

// getting the input value after click  
let donateAmount = parseFloat(getIdValue("donateAmount"));
// checking the value criteria
if(donateAmount > 0 && typeof donateAmount === 'number' ){
    // converting the elements to number
    let mainBalanceNum = parseFloat(mainBalance);
    let donatedBalanceNum = parseFloat(donatedBalance);

    // the calculation part
    let newBalance = mainBalanceNum - donateAmount;
    let totalDonated = donatedBalanceNum + donateAmount;

    // returning the result to DOM
    getMyId('mainBalance').innerText = newBalance;
    getMyId('donatedBalance').innerText = totalDonated;

    // to show modal
    my_modal_2.showModal();
}
else{
    alert('Invalid Input');
}
})

// adding an evenllisitener to donate button

let donate2 = getMyId("donate2");


// adding an evenllisitener to donat button
donate2.addEventListener('click', function(){
    let mainBalance = getMyId("mainBalance").innerText;

    // getting the input value after click  
    let donateAmount2 = parseFloat(getIdValue("donateAmount2"));
    let donatedBalance2 = getMyId("donatedBalance2").innerText;
    // checking the value criteria
    if(donateAmount2 > 0 && typeof donateAmount2 === 'number' ){
        // converting the elements to number
        let mainBalanceNum = parseFloat(mainBalance);
        let donatedBalanceNum = parseFloat(donatedBalance2);

        // the calculation part
        let newBalance = mainBalanceNum - donateAmount2;
        let totalDonated = donatedBalanceNum + donateAmount2;

        // returning the result to DOM
        getMyId('mainBalance').innerText = newBalance;
        getMyId('donatedBalance2').innerText = totalDonated;
    
        // to show modal
        my_modal_2.showModal();
    }
    else{
        alert('Invalid Input');
    }
    })

// adding an evenllisitener to donate button

let donate3 = getMyId("donate3");

// adding an evenllisitener to donat button
donate3.addEventListener('click', function(){
    let mainBalance = getMyId("mainBalance").innerText;
    let donatedBalance3 = getMyId("donatedBalance3").innerText;

    // getting the input value after click  
    let donateAmount3 = parseFloat(getIdValue("donateAmount3"));
    // checking the value criteria
    if(donateAmount3 > 0 && typeof donateAmount3 === 'number' ){
        // converting the elements to number
        let mainBalanceNum = parseFloat(mainBalance);
        let donatedBalanceNum = parseFloat(donatedBalance3);

        // the calculation part
        let newBalance = mainBalanceNum - donateAmount3;
        let totalDonated = donatedBalanceNum + donateAmount3;
        // returning the result to DOM
        getMyId('mainBalance').innerText = newBalance;
        getMyId('donatedBalance3').innerText = totalDonated;
    
        // to show modal
        my_modal_2.showModal();   
    }
    else{
        alert('Invalid Input');
    }
    })



    // history section creation
     const history = document.createElement('div');
     history.className ="bg-white"
     history.innerHTML = `
        
     `