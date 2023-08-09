document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('canvas');
    const policies = document.querySelectorAll('.policy-option');

    policies.forEach(policy => {
        policy.addEventListener('click', function() {
            const policyType = this.getAttribute('data-policy');

            // Toggle the policy effect (add if not present, remove if present)
            if(this.classList.contains('selected')) {
                removePolicyEffect(policyType);
                this.classList.remove('selected');
            } else {
                applyPolicyEffect(policyType);
                this.classList.add('selected');
            }
        });
    });
});

function applyPolicyEffect(policyType) {
    // Create a new overlay div for the selected policy
    const overlay = document.createElement('div');
    overlay.classList.add(`${policyType}-overlay`, 'policy-overlay');

    // Append this overlay to the canvas
    canvas.appendChild(overlay);
}

function removePolicyEffect(policyType) {
    // Find the overlay of this policy type and remove it
    const overlay = canvas.querySelector(`.${policyType}-overlay`);
    if (overlay) {
        canvas.removeChild(overlay);
    }
}
