export default function healthAll(obj) {
  obj.sort((a, b) => b.health - a.health );
  return obj;
}

