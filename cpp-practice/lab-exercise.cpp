#include<iostream>
#include<cmath>
using namespace std;
int main (){
	do{
	    char choice;
	    char y_n;
            cout<<"\nPress (+,-,*,/,%,^,s) to perform functions";
	        cout<<"\n\nEnter your choice: ";
	        cin>>choice;
	    float num1,num2,result,result1;
	        cout<<"\n\nEnter the first number: ";
	        cin>>num1;
	        cout<<"\n\nEnter the second number: ";
	        cin>>num2;
	    switch(choice)
		{
		    case '+':
			    result = num1 + num2;
			      break;
	        case '*':
			    result = num1 * num2;
			      break;
		    case '-':
			    result = num1 - num2;
			      break;	
		    case '/':
			if (num2 !=0){
			    result = num1 / num2;
		    }else{printf("\nerror");return 1;}
		    break;
		    case '%':
		    if ((int)num2 != 0)
		        {
                result = (int)num1 % (int)num2;
				}
			      break;
			case '^':
				     cout<<"\nEnter the number 1st.";
				     cout<<"\nThen power.";
				result = pow(num1,num2);
			break;
			case 's':
				result = sqrt(num1);
				result1= sqrt(num2);
			break;	
	        default:
		       cout<<"\n\n\t\tinvalid choice!\n"; 
	    }
	            if(choice == 's')
	            {
	                cout<<"\n\nYour result is: "<<result<<endl;
					cout<<"\n\nYour result is: "<<result1<<endl;	
				}
				else
	            cout<<"\n\nYour result is: "<<result<<endl;
	            cout<<"\n\n===================Choose wether you want to move forword or exit.==================";
	            cout<<"\n\nEnter your choice(y/n): ";
	            cin>>y_n;
	    if(y_n == 'n')
	    {
	    	cout<<"\n\nYou exit the program.";
	    	return 0;
		}
    }while(_yn);
	return 0;
}
