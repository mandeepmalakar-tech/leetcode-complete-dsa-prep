#include <iostream>
using namespace std;

// Pattern like this 

// *      *
// **    **
// ***  ***
// ********
// ********
// ***  ***
// **    **
// *      *


void printRow(int i, int n){

}

int main(){
    int n; 
    cout << "Enter the no. of rows: ";
    cin >> n;
    for(int i=1; i<=n; i++){
        // top half 

        // print left star
        for(int leftStar=1; leftStar<=i; leftStar++){
            cout << "*";
        } 

        // print space 
        for(int space=1; space<=2*(n-i); space++){
            cout << " ";
        };

        // print right star 
        for(int leftStar=1; leftStar<=i; leftStar++){
            cout << "*";
        } 
        cout << endl;
    }
        // bottom half 
        for(int i=1; i<=n; i++){
        // print left star
            for(int leftStar=n; leftStar>=i; leftStar--){
                cout << "*";
            }

            // print space
            for(int space=i; space<=2*i-2; space++){
                cout << "  ";
            }
            for(int leftStar=n; leftStar>=i; leftStar--){
                cout << "*";
            }
            cout << endl;
        }
    return 0;
}