

bool isPalindrome(int x){
 int digit;
 int org=x;
 long rev=0;
 if(x<0)
  return false;
 else 
  {while(x!=0)
  {
    digit=x%10;
    rev=(rev*10)+digit;
    x=x/10;
  }
  if(org==rev)
  return true;
  }
  return NULL;
}