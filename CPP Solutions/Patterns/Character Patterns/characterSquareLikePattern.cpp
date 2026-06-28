#include <iostream>
using namespace std;

// Pattern Like this : 
// ABCDEFGHIJ
// ABCDEFGHIJ
// ABCDEFGHIJ
// ABCDEFGHIJ
// ABCDEFGHIJ
// ABCDEFGHIJ
// ----------for the n times 

int main(){
    int n;
    cout << "Enter the Number of rows: ";
    cin >> n;

    for(int i=0; i<n; i++){
        char ch = 'A';
        for(int j=0; j<n; j++){
            cout << ch;
            ch = ch + 1;
        }
        cout << endl;
    }
    return 0;
}