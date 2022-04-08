# Problems (21)

|#|Title|Solution|Difficulty|Language|Thinking|
|-|-----|--------|----------|--------|--------|
|1|[两数之和](https://leetcode-cn.com/problems/two-sum)|[√](https://github.com/MleMoe/LeetCode/tree/master/problems/two-sum)|easy|ts|两数之和，用hash表，以空间换时间。时间：O(n)，空间：O(n)|
|2|[两数相加](https://leetcode-cn.com/problems/add-two-numbers)|[√](https://github.com/MleMoe/LeetCode/tree/master/problems/add-two-numbers)|medium|ts|根据加法思想，一次遍历两个链表（可能多出一个进位）。需考虑：当到达某个链表结尾的处理方法，以及如何保留有效节点（留一个空的头节点）。|
|3|[无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters)|[√](https://github.com/MleMoe/LeetCode/tree/master/problems/longest-substring-without-repeating-characters)|medium|ts|滑动窗口（双指针），注意左指针的移动位置为left+index+1|
|4|[寻找两个正序数组的中位数](https://leetcode-cn.com/problems/median-of-two-sorted-arrays)|[√](https://github.com/MleMoe/LeetCode/tree/master/problems/median-of-two-sorted-arrays)|hard|ts|方法一：从小至大一次遍历两个数组，直至中位，时间O(m+n)方法二：二分查找，用k/2做处理，其中k=(m+n)/2，时间O(log(m+n))|
|5|[最长回文子串](https://leetcode-cn.com/problems/longest-palindromic-substring)|[√](https://github.com/MleMoe/LeetCode/tree/master/problems/longest-palindromic-substring)|medium|ts|遍历字符串+中心扩散，str.slice(l+1,r)是精髓时间O(nn)|
|6|[Z字形变换](https://leetcode-cn.com/problems/zigzag-conversion)|[√](https://github.com/MleMoe/LeetCode/tree/master/problems/zigzag-conversion)|medium|ts|遍历+模拟，使用numRows大小的字符串数组辅助，确定行index（分-1/1方向）加入新字符。特殊输入：numRows=1，为原字符串|
|7|[整数反转](https://leetcode-cn.com/problems/reverse-integer)|[√](https://github.com/MleMoe/LeetCode/tree/master/problems/reverse-integer)|medium|ts|尾数遍历时乘以10再相加，注意符号位，时间O(n)，空间O(1)|
|8|[字符串转换整数 (atoi)](https://leetcode-cn.com/problems/string-to-integer-atoi)|[√](https://github.com/MleMoe/LeetCode/tree/master/problems/string-to-integer-atoi)|medium|ts|正则表达式match方法，使用/g|
|9|[回文数](https://leetcode-cn.com/problems/palindrome-number)|[√](https://github.com/MleMoe/LeetCode/tree/master/problems/palindrome-number)|easy|ts|按位遍历数，得逆序结果，比较；可去除大数限制：只遍历一半，终止条件numReverse>=num（考虑中位数）时间都是O(logn)|
|11|[盛最多水的容器](https://leetcode-cn.com/problems/container-with-most-water)|[√](https://github.com/MleMoe/LeetCode/tree/master/problems/container-with-most-water)|medium|ts|1.两两比较，类冒泡排序，O(nn)超时2.双指针，向内移动短板，可能增大，向内移动长板，必不能增大，故可O(n)遍历|
|12|[整数转罗马数字](https://leetcode-cn.com/problems/integer-to-roman)|[√](https://github.com/MleMoe/LeetCode/tree/master/problems/integer-to-roman)|medium|ts|贪心，哈希表|
|13|[罗马数字转整数](https://leetcode-cn.com/problems/roman-to-integer)|[√](https://github.com/MleMoe/LeetCode/tree/master/problems/roman-to-integer)|easy|ts|哈希，模拟遍历|
|14|[最长公共前缀](https://leetcode-cn.com/problems/longest-common-prefix)|[√](https://github.com/MleMoe/LeetCode/tree/master/problems/longest-common-prefix)|easy|ts|遍历比较，时间O(mn)|
|15|[三数之和](https://leetcode-cn.com/problems/3sum)|[√](https://github.com/MleMoe/LeetCode/tree/master/problems/3sum)|medium|ts|升序排列，遍历（nums[i]同前值跳过；当取得值时，l或r连续相同值跳过）+双指针，时间O(nn)|
|16|[最接近的三数之和](https://leetcode-cn.com/problems/3sum-closest)|[√](https://github.com/MleMoe/LeetCode/tree/master/problems/3sum-closest)|medium|ts|升序排列，双指针，O(nn)|
|17|[电话号码的字母组合](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number)|[√](https://github.com/MleMoe/LeetCode/tree/master/problems/letter-combinations-of-a-phone-number)|medium|ts|使用队列，时间O(3n4m)|
|18|[四数之和](https://leetcode-cn.com/problems/4sum)|[√](https://github.com/MleMoe/LeetCode/tree/master/problems/4sum)|medium|ts|三数之和基础上增加一层遍历，时间O(nnn)|
|19|[删除链表的倒数第 N 个结点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list)|[√](https://github.com/MleMoe/LeetCode/tree/master/problems/remove-nth-node-from-end-of-list)|medium|ts|遍历寻找删除的preNode，由num->n判断当前哪个是倒数第n+1个节点。边界：倒数第length个。时间O(n)|
|20|[有效的括号](https://leetcode-cn.com/problems/valid-parentheses)|[√](https://github.com/MleMoe/LeetCode/tree/master/problems/valid-parentheses)|easy|ts|栈|
|22|[括号生成](https://leetcode-cn.com/problems/generate-parentheses)|[√](https://github.com/MleMoe/LeetCode/tree/master/problems/generate-parentheses)|medium|ts|DP，f(n)=`(${f(i)})${f(n-1-i)}`,0<i<n-1，划分为括号内和括号外|
|23|[合并K个升序链表](https://leetcode-cn.com/problems/merge-k-sorted-lists)|[√](https://github.com/MleMoe/LeetCode/tree/master/problems/merge-k-sorted-lists)|hard|ts|tionmergeKLists(lists:Array<ListNode|null>):ListNode|null{constmerge2Lists=(aList:ListNode|null,bList:ListNode|null)=>{if(!aList){returnbList}if(!bList){returnaList}constdummyHead=newListNode(),p=dummyHeadwhile(aList&&bList){if(aList.val<bList.val){p.next=aListaList=aList}else{p.next=bListbList=bList}}p.next=aList??bListreturndummyHead.next}while(lists.length>1){}for(leti=0;i<n;i=i+2){}returnnull}import{testFunction,ListNode}from'../../utils'consttestCases=[]constexpectedResults=[]testFunction(mergeKLists,testCases,expectedResults)|
