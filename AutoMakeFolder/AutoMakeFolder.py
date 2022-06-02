import os
import sys

# 设定固定过滤格式
#        1     2     3    4    5    6    7     8    9   10
Rule = ["\n", "\\", "/", ":", "*", "?", "\"", "<", ">", "|"]

# 判断当前执行目录
if getattr(sys, 'frozen', False):
    SavePath = os.path.dirname(os.path.realpath(sys.executable)) + '//'
elif __file__:
    SavePath = os.path.dirname(os.path.realpath(__file__)) + '//'

# 读取文本内容
f = open("FolderName.txt", "r", encoding = "utf-8")
FolderName = list(f)
f.close

# 数据清洗
for i in range(len(FolderName)):
    for j in range(0,10):
        if (Rule[j] in FolderName[i]):
            FolderName[i] = FolderName[i].replace(Rule[j], '')

# 创建文件夹
if os.path.exists(SavePath):
    for i in range(len(FolderName)):
        os.mkdir(SavePath + str(FolderName[i]))
