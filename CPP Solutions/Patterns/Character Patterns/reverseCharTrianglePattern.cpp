#include <iostream> 
using namespace std;

// Pattern like this 
// A 
// B A 
// C B A 
// D C B A 


int main(){
    int n; 
    cout << "Enter the no. of rows: ";
    cin >> n;

    for(int i=1; i<=n; i++){
        char ch = 'A' + i - 1;
        for(int j=i; j>=1; j--){
            cout << ch << " ";
            ch = ch - 1; 
        }
        cout << endl;
    }
    return 0;
}