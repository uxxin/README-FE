export default function FlexBox({
  children,
  col,
  items,
  justify,
  gap,
  px,
  py,
  calc,
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
        width: `calc(100% - ${calc || 0}rem)`,
      }}
    >
      {children}
    </section>
  );
}
