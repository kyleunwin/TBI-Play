<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2299">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; color: #000000; -webkit-text-stroke: #000000}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; color: #000000; -webkit-text-stroke: #000000; min-height: 14.0px}
    span.s1 {font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">document.addEventListener("DOMContentLoaded", () =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const canvas = document.getElementById('canvas');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const policies = document.querySelectorAll('.policy-option');</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>policies.forEach(policy =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>policy.addEventListener('click', function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>const policyType = this.getAttribute('data-policy');</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>// Toggle the policy effect (add if not present, remove if present)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>if(this.classList.contains('selected')) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>removePolicyEffect(policyType);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>this.classList.remove('selected');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>applyPolicyEffect(policyType);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>this.classList.add('selected');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>});</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function applyPolicyEffect(policyType) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// Create a new overlay div for the selected policy</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const overlay = document.createElement('div');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>overlay.classList.add(`${policyType}-overlay`, 'policy-overlay');</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// Append this overlay to the canvas</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>canvas.appendChild(overlay);</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function removePolicyEffect(policyType) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// Find the overlay of this policy type and remove it</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const overlay = canvas.querySelector(`.${policyType}-overlay`);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (overlay) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>canvas.removeChild(overlay);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">}</span></p>
</body>
</html>
