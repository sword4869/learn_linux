import{_ as n,W as s,X as a,Y as e}from"./framework-9a5142fa.js";const p={},t=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># install</span>
$ <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> lm-sensors

<span class="token comment"># configuration</span>
<span class="token comment"># yes...yes...</span>
$ sensors-detect

<span class="token comment"># use</span>
$ sensors
ucsi_source_psy_1_00081-i2c-1-08
Adapter: NVIDIA GPU I2C adapter
in0:           <span class="token number">0.00</span> V  <span class="token punctuation">(</span>min <span class="token operator">=</span>  +0.00 V, max <span class="token operator">=</span>  +0.00 V<span class="token punctuation">)</span>
curr1:         <span class="token number">0.00</span> A  <span class="token punctuation">(</span>max <span class="token operator">=</span>  +0.00 A<span class="token punctuation">)</span>

ucsi_source_psy_0_00081-i2c-0-08
Adapter: NVIDIA GPU I2C adapter
in0:           <span class="token number">0.00</span> V  <span class="token punctuation">(</span>min <span class="token operator">=</span>  +0.00 V, max <span class="token operator">=</span>  +0.00 V<span class="token punctuation">)</span>
curr1:         <span class="token number">0.00</span> A  <span class="token punctuation">(</span>max <span class="token operator">=</span>  +0.00 A<span class="token punctuation">)</span>

nvme-pci-0200
Adapter: PCI adapter
Composite:    +30.9°C  <span class="token punctuation">(</span>low  <span class="token operator">=</span> -273.1°C, high <span class="token operator">=</span> +80.8°C<span class="token punctuation">)</span>
                       <span class="token punctuation">(</span>crit <span class="token operator">=</span> +84.8°C<span class="token punctuation">)</span>
Sensor <span class="token number">1</span>:     +30.9°C  <span class="token punctuation">(</span>low  <span class="token operator">=</span> -273.1°C, high <span class="token operator">=</span> +65261.8°C<span class="token punctuation">)</span>
Sensor <span class="token number">2</span>:     +33.9°C  <span class="token punctuation">(</span>low  <span class="token operator">=</span> -273.1°C, high <span class="token operator">=</span> +65261.8°C<span class="token punctuation">)</span>

acpitz-acpi-0
Adapter: ACPI interface
temp1:        +27.8°C  <span class="token punctuation">(</span>crit <span class="token operator">=</span> +119.0°C<span class="token punctuation">)</span>

coretemp-isa-0000
Adapter: ISA adapter
Package <span class="token function">id</span> <span class="token number">0</span>:  +30.0°C  <span class="token punctuation">(</span>high <span class="token operator">=</span> +82.0°C, crit <span class="token operator">=</span> +100.0°C<span class="token punctuation">)</span>
Core <span class="token number">0</span>:        +28.0°C  <span class="token punctuation">(</span>high <span class="token operator">=</span> +82.0°C, crit <span class="token operator">=</span> +100.0°C<span class="token punctuation">)</span>
Core <span class="token number">1</span>:        +26.0°C  <span class="token punctuation">(</span>high <span class="token operator">=</span> +82.0°C, crit <span class="token operator">=</span> +100.0°C<span class="token punctuation">)</span>
Core <span class="token number">2</span>:        +29.0°C  <span class="token punctuation">(</span>high <span class="token operator">=</span> +82.0°C, crit <span class="token operator">=</span> +100.0°C<span class="token punctuation">)</span>
Core <span class="token number">3</span>:        +27.0°C  <span class="token punctuation">(</span>high <span class="token operator">=</span> +82.0°C, crit <span class="token operator">=</span> +100.0°C<span class="token punctuation">)</span>
Core <span class="token number">4</span>:        +28.0°C  <span class="token punctuation">(</span>high <span class="token operator">=</span> +82.0°C, crit <span class="token operator">=</span> +100.0°C<span class="token punctuation">)</span>
Core <span class="token number">5</span>:        +27.0°C  <span class="token punctuation">(</span>high <span class="token operator">=</span> +82.0°C, crit <span class="token operator">=</span> +100.0°C<span class="token punctuation">)</span>
Core <span class="token number">6</span>:        +28.0°C  <span class="token punctuation">(</span>high <span class="token operator">=</span> +82.0°C, crit <span class="token operator">=</span> +100.0°C<span class="token punctuation">)</span>
Core <span class="token number">7</span>:        +26.0°C  <span class="token punctuation">(</span>high <span class="token operator">=</span> +82.0°C, crit <span class="token operator">=</span> +100.0°C<span class="token punctuation">)</span>

nvme-pci-0600
Adapter: PCI adapter
Composite:    +36.9°C  <span class="token punctuation">(</span>low  <span class="token operator">=</span> -40.1°C, high <span class="token operator">=</span> +83.8°C<span class="token punctuation">)</span>
                       <span class="token punctuation">(</span>crit <span class="token operator">=</span> +87.8°C<span class="token punctuation">)</span>
Sensor <span class="token number">1</span>:     +56.9°C  <span class="token punctuation">(</span>low  <span class="token operator">=</span> -273.1°C, high <span class="token operator">=</span> +65261.8°C<span class="token punctuation">)</span>
Sensor <span class="token number">2</span>:     +33.9°C  <span class="token punctuation">(</span>low  <span class="token operator">=</span> -273.1°C, high <span class="token operator">=</span> +65261.8°C<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[t];function c(i,l){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","machine_temperature.html.vue"]]);export{u as default};
