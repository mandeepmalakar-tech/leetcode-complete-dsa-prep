#include <iostream> 
using namespace std;

// Repeated Integer Right Triangle Pattern 
// 1
// 2 2
// 3 3 3
// 4 4 4 4 
// ----------for the n times 


int main(){
    int n; 
    cout << "Enter the no. of Rows: ";
    cin >> n;

    int num = 1;
    for(int i=1; i<=n; i++){
        for(int j=1; j<=i; j++){
            cout << num << " "; 
        }
        num = num + 1;
        cout << endl;
    }
    return 0;
}