class Solution:
    def binaryGap(self, N: int) -> int:
        A = [i for i in range(32) if (N >> i) & 1]
        if len(A) < 2: return 0
        return max(A[i+1] - A[i] for i in range(len(A) - 1))