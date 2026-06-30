#include<iostream>
using namespace std;

int main(){
    int TC;
    cin >> TC;
    while(TC--){
        int x, y;
        cin >> x >> y;

        if(x>=y && x%y==0){
            cout << "YES\n";
        }
        else{
            cout << "NO\n";
        }
    }
    return 0;
}