# JackPolynomials.jl documentation

Schur polynomials have applications in combinatorics and zonal polynomials have
applications in multivariate statistics. They are particular cases of
[Jack polynomials](https://en.wikipedia.org/wiki/Jack_function). This package
allows to evaluate these polynomials. It can also compute their symbolic form:

```julia
julia> jack = JackPolynomial(2, [3 ; 1], 2.5)
24.5x₁³x₂ + 14.0x₁²x₂² + 24.5x₁x₂³

julia> jack(1,2)
301.0
```

Here `2.5` is the value of the `alpha` parameter. It is also possible to deal
with a symbolic `alpha`:

```julia
julia> jack = JackPolynomial(2, [2 ; 1])
(alpha + 2)*x_1^2*x_2 + (alpha + 2)*x_1*x_2^2

julia> jack(1,2)
6*alpha + 12
```

Such a polynomial is associated to a partition of an integer (the `lambda`
argument in the Julia functions). It must be given as a decreasing vector of
nonnegative integers (tail-zeros are allowed but they are ignored: the
partion `[3; 2; 0]` is the same as `[3; 2]`).


## Reference

James Demmel & Plamen Koev.
*Accurate and efficient evaluation of Schur and Jack functions*.
Mathematics of Computation 75, 253 (2015), 223-239.


## Member functions

```@autodocs
Modules = [JackPolynomials]
Order   = [:type, :function]
```
