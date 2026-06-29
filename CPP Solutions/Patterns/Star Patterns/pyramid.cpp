#include <iostream>
using namespace std;

// Pattern like this 
//     *
//    ***
//   *****
//  *******
// *********
// ---------nth times

int main(){
    int n; 
    cout << "Enter the no. of rows: ";
    cin >> n;
    for(int i=1; i<=n; i++){
        // print space 
        for(int space=1; space<=n-i; space++){
            cout << " ";
        }
        // print star 
        for(int star=1; star<=2*i-1; star++){
            cout << "*";
        }
        cout << endl;
    }
    return 0;
}
