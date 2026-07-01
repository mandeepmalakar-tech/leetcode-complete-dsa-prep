#include <iostream>
using namespace std;

// Pattern Like this
//            *
//          *   *
//        *       *
//      *           *
//        *       *
//          *   *
//            *

// Think like this
//       *          ↑
//     *   *        |
//   *       *      | Top
// *           *    ↓

//   *       *      ↑
//     *   *        | Bottom
//       *          ↓


// to print the row 
void printRow(int i, int n)
{
    // print outer space
    for (int outerSpace = 1; outerSpace <= n - i; outerSpace++)
    {
        cout << "  ";
    }

    // stars and innerspace
    cout << "*"; // the first star;
    if (i > 1)
    {
        for (int innerSpace = 1; innerSpace <= 4 * i - 5; innerSpace++)
        {
            cout << " ";
        }
        cout << "*";
    }

    cout << endl;
};

int main()
{
    int n = 4;
    cout << "Enter the No: of rows: ";
    cin >> n;

    // Top Half Logic
    for (int i = 1; i <= n; i++)
    {
        printRow(i, n);
    }

    // Bottom Half Logic
    for (int i = n - 1; i >= 1; i--)
    {
        printRow(i, n);
    }
    return 0;
}

