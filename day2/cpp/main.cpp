#include <iostream>
#include <string>
#include <algorithm>

int main(void) {
int min;
int max;
char trash;
char c;
std::string pwd;
int valid = 0;
while (std::cin >> min >> trash >> max >> c >> trash >> pwd) {
int freq = std::count(pwd.begin(), pwd.end(), c);
if (freq >= min && freq <= max) {
++valid;
}
}
std::cout << valid << std::endl;
return 0;
}
