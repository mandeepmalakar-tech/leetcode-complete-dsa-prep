#include <iostream>
using namespace std; 

// Square like pattern
// 12345
// 12345
// 12345
// 12345
// 12345
// ----------for the n times 


int main(){
    int n;
    cout << "Enter the Number of rows: ";
    cin >> n;
    
    for(int i=1; i<=n; i++){ // outer loop
        for(int j=1; j<=n; j++){ // inner loop
            cout << j;
        }
        cout << endl;
    }
    return 0;
}
