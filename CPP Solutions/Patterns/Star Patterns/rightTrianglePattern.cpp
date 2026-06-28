#include <iostream> 
using namespace std;

// Right Triangle Pattern 
// *
// * *
// * * *
// * * * *
// ----------for the n times 


int main(){
    int n; 
    cout << "Enter the no. of Rows: ";
    cin >> n;

    for(int i=1; i<=n; i++){
        for(int j=1; j<=i; j++){
            cout << "*" << " ";
        }
        cout << endl;
    }
    return 0;
}