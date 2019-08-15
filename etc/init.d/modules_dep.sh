#!/bin/sh
### BEGIN INIT INFO
# Provides:          modules_dep
# Required-Start:
# Required-Stop:
# Default-Start:     2 3 4 5
# Default-Stop:      0 6
# Short-Description: modules.dep creation.
# Description:       Create and destroy modules.dep.
### END INIT INFO

case "$1" in
  start|"")
	if [ ! -d "/lib/modules/`uname -r`" ]; then
		mkdir -p /lib/modules/`uname -r`
	fi
	depmod -a >/dev/null 2>&1
	;;
  restart|reload|force-reload)
	echo "Error: argument '$1' not supported" >&2
	exit 3
	;;
  stop|force-stop)
	if [ -d "/lib/modules/`uname -r`" ]; then
		rm -rf /lib/modules/`uname -r`
	fi
	;;
  *)
	echo "Usage: modules_dep.sh [start|stop]" >&2
	exit 3
	;;
esac

:


