from google.colab import drive
drive.mount('/content/drive')

!pip install numpy
!pip install pandas
!pip install matplotlib
!pip install xarray
!pip install metpy

import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
from metpy.plots import SkewT
from metpy.units import units

# Read radiosonde data from a CSV file
data_csv = pd.read_csv("/content/drive/MyDrive/tephi01_data.csv", encoding='latin1')

# Print column names to inspect them
print(data_csv.columns)

# Assuming 'T(°C)' and 'DP(°C)' are correct
# Get the range of pressure levels from the data
pressure_min = data_csv['P(hPa)'].min()
pressure_max = data_csv['P(hPa)'].max()

# Create a Skew-T plot
fig = plt.figure(figsize=(8, 8))
skew = SkewT(fig=fig)

# Plot the temperature and dew point temperature profiles
skew.plot(data_csv['P(hPa)'].values * units.hPa, data_csv['T(°C)'].values * units.degC, color='r', label='T(°C)')
skew.plot(data_csv['P(hPa)'].values * units.hPa, data_csv['DP(°C)'].values * units.degC, color='b', label='DP(°C)')

# Plot saturation mixing ratio lines, specifying the pressure range
skew.plot_mixing_lines(pressure=np.linspace(pressure_max, pressure_min, 100) * units.hPa, color='k')

# Plot dry adiabats with continuous lines (solid line style)
skew.plot_dry_adiabats(linewidth=1, linestyle='-', colors='k')

# Plot pseudo-adiabats (moist adiabats)
skew.plot_moist_adiabats(linewidth=1, linestyle='-', colors='k')

# Add legend
plt.legend()

# Show the plot
plt.title('Radiosonde Data on Tephigram')
plt.show()