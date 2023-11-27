fn main() {
  let str = std::env::args().nth(1).expect("no string to check");
  println!("return is {}", is_unique(&str));
}

fn is_unique(str: &str) -> bool {
  let mut is_unique_list = [false; 128];

  for char in str.chars() {
    let index = char as usize;

    if is_unique_list[index] {
      return false;
    }

    is_unique_list[index] = true;
  }
  true
}
