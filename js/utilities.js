// Common function to getelemnts ID
function getMyId(id) {
  return document.getElementById(id);
}

// Common function to handle donation
function handleDonation(inputId, donatedBalanceId, donationHeadingId) {
  // Get the main balance element and its current value
  const mainBalanceElement = getMyId("mainBalance");
  let mainBalance = parseInt(mainBalanceElement.textContent);

  // Get the donation input value for the specific section
  let donationInput = getMyId(inputId);
  const donationAmount = parseInt(donationInput.value);

  // Ensure input is a valid number and is less than or equal to main balance
  if (
    !isNaN(donationAmount) &&
    donationAmount > 0 &&
    donationAmount <= mainBalance
  ) {
    // Deduct from main balance
    mainBalance -= donationAmount;
    mainBalanceElement.textContent = mainBalance;

    // Add to the respective section's donated balance
    const donatedBalanceElement = getMyId(donatedBalanceId);
    let currentDonatedBalance = parseInt(donatedBalanceElement.textContent);
    donatedBalanceElement.textContent = currentDonatedBalance + donationAmount;

    
    
    // Get the heading text
    let donateHeading = getMyId(donationHeadingId).textContent;

    // Get current date and time
    let currentTime = new Date().toLocaleString();

    // History section creation
    const historyData = document.createElement("div");
    historyData.className =
      "bg-white p-4 rounded-lg border-grey-500 border-2 my-4";
    historyData.innerHTML = `
    <p class="font-medium text-xl">${donationAmount} taka is donated for ${donateHeading}</p>
    <p>${currentTime}</p>
 `;
    let historyBox = getMyId("history");
    historyBox.insertBefore(historyData, historyBox.firstChild);

    donationInput.value = "";
    // show modal
    my_modal_2.showModal();
    // clsose modal 
    const closeBtn = getMyId('closeBtn');
    closeBtn.addEventListener('click', function(){
      my_modal_2.close()
    })
  } else {
    alert("Invalid donation amount or insufficient main balance!");
  }
}
