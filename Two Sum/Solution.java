class Solution {
    public int[] twoSum(int[] nums, int target) {
        int res[];
        res = new int[2];
        for(int i = 0; i<nums.length;i++){
         for (int z=i+1; z<nums.length; z++){
             if(nums[i] + nums[z]==target){
                res[0]=i;
                res[1]=z;
            }
         }
      }
        return res;
    }
}
