#include <iostream>
using namespace std;

// Pattern like this

//    *
//  *...*
//  *...*
//    *

int main()
{
    int rows = 4;
    int cols = 5;

    for (int i = 1; i <= rows; i++)
    {
        for (int j = 1; j <= cols; j++)
        {
            if(
               (i == 1 && j == 3) || // top star
               (i == 4 && j == 3) || // bottom star
               (j == 1 && i != 1 && i != rows) ||  // left star
               (j == 5 && i != 1 && i != rows) // right star
            ){
                cout << "*";
            }else{
                cout << " ";
            }
        }
        cout << endl;
    }
    return 0;
}