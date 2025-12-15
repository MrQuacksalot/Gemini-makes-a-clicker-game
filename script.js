document.addEventListener('DOMContentLoaded', () => {
    // Game State Variables
    let points = 0;
    let pointsPerClick = 1;
    let ppcUpgradeCost = 10;

    // DOM Element References
    const pointsDisplay = document.getElementById('points-display');
    const ppcDisplay = document.getElementById('ppc-display');
    const clickButton = document.getElementById('click-button');
    const upgradePpcButton = document.getElementById('upgrade-ppc-button');
    const ppcCostDisplay = document.getElementById('ppc-cost');

    // Function to update the display elements
    function updateDisplay() {
        pointsDisplay.textContent = Math.floor(points);
        ppcDisplay.textContent = pointsPerClick;
        ppcCostDisplay.textContent = ppcUpgradeCost;

        // Disable upgrade button if not enough points
        if (points >= ppcUpgradeCost) {
            upgradePpcButton.disabled = false;
        } else {
            upgradePpcButton.disabled = true;
        }
    }

    // Click button event listener
    clickButton.addEventListener('click', () => {
        points += pointsPerClick;
        updateDisplay();
    });

    // Upgrade PPC button event listener
    upgradePpcButton.addEventListener('click', () => {
        if (points >= ppcUpgradeCost) {
            points -= ppcUpgradeCost;
            pointsPerClick += 1; // Increase PPC by 1
            ppcUpgradeCost = Math.floor(ppcUpgradeCost * 1.5); // Increase cost for next upgrade
            updateDisplay();
        }
    });

    // Initialize the display on page load
    updateDisplay();
});
