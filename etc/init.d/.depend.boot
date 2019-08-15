TARGETS = mountkernfs.sh hostname.sh plymouth-log screen-cleanup udev mountdevsubfs.sh procps hwclock.sh networking urandom checkroot.sh mountnfs-bootclean.sh mountnfs.sh bootmisc.sh checkfs.sh mountall.sh checkroot-bootclean.sh kmod mountall-bootclean.sh
INTERACTIVE = udev checkroot.sh checkfs.sh
udev: mountkernfs.sh
mountdevsubfs.sh: mountkernfs.sh udev
procps: mountkernfs.sh udev
hwclock.sh: mountdevsubfs.sh
networking: mountkernfs.sh urandom procps
urandom: hwclock.sh
checkroot.sh: hwclock.sh mountdevsubfs.sh hostname.sh
mountnfs-bootclean.sh: mountnfs.sh
mountnfs.sh: networking
bootmisc.sh: mountnfs-bootclean.sh mountall-bootclean.sh udev checkroot-bootclean.sh
checkfs.sh: checkroot.sh
mountall.sh: checkfs.sh checkroot-bootclean.sh
checkroot-bootclean.sh: checkroot.sh
kmod: checkroot.sh
mountall-bootclean.sh: mountall.sh
