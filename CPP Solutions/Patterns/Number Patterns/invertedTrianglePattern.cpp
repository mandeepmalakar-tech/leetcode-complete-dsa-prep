#include <iostream>
using namespace std;

// Pattern Like this 
// 1 1 1 1 
//   2 2 2 
//     3 3 
//       4


int main(){
    
    int n;
    cout << "Enter the no. of rows: ";
    cin >> n;

    for(int i=1; i<=n; i++){ // outer loop for rows
         // print space 
        for(int space=1; space < i; space++){
            cout << "  ";
        }

        // print numbers
        for(int j=1; j<=n-i+1; j++){
            cout << i << " ";
        }
        cout << endl;
    }
    return 0;
}