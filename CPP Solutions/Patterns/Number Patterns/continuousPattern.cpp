#include <iostream>
using namespace std;
// Pattern like this: 
// 1 2 3
// 4 5 6 
// 7 8 9 

int main(){
    int n; 
    cout << "Enter the Number of Rows: ";
    cin >> n;
    int num = 1;
    for(int i=0; i<n; i++){
        for(int j=0; j<n; j++){
            cout << num << " ";
            num++;
        }
        cout << endl;
    }
    return 0;
}