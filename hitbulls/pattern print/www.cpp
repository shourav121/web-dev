#include <iostream>
using namespace std;
int main() {
    for (int i = 5; i >= 1; --i) {
        for (int j = 5; j > i; --j) {
        cout << " ";
        }
        for (int k = i; k >= 1; --k) {
            cout<< k;
        }
        cout<<endl;
    }
    return 0;
}