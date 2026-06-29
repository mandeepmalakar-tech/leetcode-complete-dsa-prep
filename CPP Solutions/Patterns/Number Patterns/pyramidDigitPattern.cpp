#include <iostream>
using namespace std;

// Pattern like this 
//       1
//     1 2 1
//   1 2 3 2 1 
// 1 2 3 4 3 2 1 
// ---------------nth times

int main(){
    int n; 
    cout << "Enter the no. of rows: ";
    cin >> n;
    for(int i=1; i<=n; i++){
        // print space 
        for(int space=1; space<=n-i; space++){
            cout << " ";
        }
        // Increasing digit 
        for(int incOrder=1; incOrder<=i; incOrder++){
            cout << incOrder;
        }
        // decreasing digit
        for(int decOrder=i-1; decOrder>=1; decOrder--){
            cout << decOrder;
        }
        cout << endl;
    }
    return 0;
}
