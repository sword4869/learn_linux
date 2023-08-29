```bash
# install
$ sudo apt install lm-sensors

# configuration
# yes...yes...
$ sensors-detect

# use
$ sensors
ucsi_source_psy_1_00081-i2c-1-08
Adapter: NVIDIA GPU I2C adapter
in0:           0.00 V  (min =  +0.00 V, max =  +0.00 V)
curr1:         0.00 A  (max =  +0.00 A)

ucsi_source_psy_0_00081-i2c-0-08
Adapter: NVIDIA GPU I2C adapter
in0:           0.00 V  (min =  +0.00 V, max =  +0.00 V)
curr1:         0.00 A  (max =  +0.00 A)

nvme-pci-0200
Adapter: PCI adapter
Composite:    +30.9°C  (low  = -273.1°C, high = +80.8°C)
                       (crit = +84.8°C)
Sensor 1:     +30.9°C  (low  = -273.1°C, high = +65261.8°C)
Sensor 2:     +33.9°C  (low  = -273.1°C, high = +65261.8°C)

acpitz-acpi-0
Adapter: ACPI interface
temp1:        +27.8°C  (crit = +119.0°C)

coretemp-isa-0000
Adapter: ISA adapter
Package id 0:  +30.0°C  (high = +82.0°C, crit = +100.0°C)
Core 0:        +28.0°C  (high = +82.0°C, crit = +100.0°C)
Core 1:        +26.0°C  (high = +82.0°C, crit = +100.0°C)
Core 2:        +29.0°C  (high = +82.0°C, crit = +100.0°C)
Core 3:        +27.0°C  (high = +82.0°C, crit = +100.0°C)
Core 4:        +28.0°C  (high = +82.0°C, crit = +100.0°C)
Core 5:        +27.0°C  (high = +82.0°C, crit = +100.0°C)
Core 6:        +28.0°C  (high = +82.0°C, crit = +100.0°C)
Core 7:        +26.0°C  (high = +82.0°C, crit = +100.0°C)

nvme-pci-0600
Adapter: PCI adapter
Composite:    +36.9°C  (low  = -40.1°C, high = +83.8°C)
                       (crit = +87.8°C)
Sensor 1:     +56.9°C  (low  = -273.1°C, high = +65261.8°C)
Sensor 2:     +33.9°C  (low  = -273.1°C, high = +65261.8°C)
```