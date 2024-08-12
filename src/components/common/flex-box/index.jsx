export default function FlexBox({
  children,
  col,
  items,
  justify,
  gap,
  px,
  py,
}) {
  return (
    <section
      style={{
        display: 'flex',
        gap: `${gap || 0}rem`,
        padding: `${py || 0}rem ${px || 0}rem`,
        justifyContent: justify || 'flex-start',
        alignItems: items || 'flex-start',
        flexDirection: col ? 'column' : 'row',
      }}
    >
      {children}
    </section>
  );
}
