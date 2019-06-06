#通过进程名找到pid ``包裹 会按照shell执行
kill `ps -ef | grep "fu.py" | grep -v grep | awk '{print $2}'`
python fu.py
